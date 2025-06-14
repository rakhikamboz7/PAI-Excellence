import { Card } from "../components/ui/card";
import { Button } from "../components/ui/Button";

const pages = [
  {
    id: "homepage",
    title: "Homepage",
    description: "Edit your website's main landing page.",
    path: "/",
  },
  {
    id: "course-details",
    title: "Course Details",
    description: "Manage your course information and curriculum.",
    path: "/course-details",
  },
  {
    id: "media-coverage",
    title: "Media Coverage",
    description: "Update media mentions and press coverage.",
    path: "/media-coverage",
  },
  {
    id: "events",
    title: "Events",
    description: "Manage upcoming and past events.",
    path: "/events",
  },
  {
    id: "about-us",
    title: "About Us",
    description: "Edit your organization's information.",
    path: "/about-us",
  },
  {
    id: "blogs",
    title: "Blogs",
    description: "Manage your blog posts and articles.",
    path: "/blogs",
  },
];

const ManagePages = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Manage Pages</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <Card key={page.id} className="shadow-lg p-6">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-lg font-bold mb-2">{page.title}</h2>
                <p className="text-gray-600 mb-4">{page.description}</p>
              </div>
              <Button
                onClick={() => window.location.href = page.path}
                className="bg-orange-600 text-white w-full py-2 rounded-lg"
              >
                Edit Page
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManagePages;