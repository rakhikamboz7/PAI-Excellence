"use client";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContent } from "../contexts/ContentContext"

const DraggableContainer = ({ children, page }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { isLiveEditing, reorderComponents, getOrderedComponents } = useContent();

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const orderedComponents = getOrderedComponents(page);
    const newOrder = Array.from(orderedComponents.map((comp) => comp.id));
    const [reorderedItem] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, reorderedItem);

    reorderComponents(page, newOrder);
  };

  if (!isAuthenticated || !isLiveEditing) {
    return <div>{children}</div>;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={`${page}-components`}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`min-h-screen ${snapshot.isDraggingOver ? "bg-blue-50" : ""} transition-colors duration-200`}
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableContainer;
