/* eslint-disable no-unused-vars */
"use client"

import { motion } from "framer-motion"
import { Calendar, Eye, ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"

const MediaCoverage = () => {
  const { t } = useTranslation()

  const fblink = () => {
    window.open("https://www.facebook.com/sgpcamritsar.org/videos/1361623474917124", "_blank")
  }

  const podcastVideos = [
    {
      id: 1,
      title: "Everything AI: Don't fear from AI now, learn it with us | Dr. Sandeep Singh & Dr Inderjot Kaur ",
      channel: "Adbi Baithak",
      thumbnail: "https://www.youtube.com/embed/0MyPF_z9p6E",
      videoId: "0MyPF_z9p6E",
    },
    {
      id: 2,
      title: "America ਤੋਂ ਪਰਤਿਆ Sikh ਜੋੜਾ ਤੁਹਾਡੇ ਬੱਚਿਆਂ ਨੂੰ ਸਿਖਾਏਗਾ AI artificial intelligence course",
      channel: "Punjab Uncut tv",
      thumbnail: "https://www.youtube.com/embed/fbRuPGOFXTM",
      videoId: "fbRuPGOFXTM",
    },
    {
      id: 3,
      title: "I Phone ਅਤੇ Samsung ਫੋਨ ਵਿੱਚ AI ਟੈਕਨੋਲੋਜੀ ਦੇਣ ਵਾਲੇ ਸਰਦਾਰ ਜੀ",
      channel: "JSK Talks",
      thumbnail: "https://www.youtube.com/embed/DpIzIUyI634",
      videoId: "DpIzIUyI634",
    },
    {
      id: 4,
      title: "ਅਮਰੀਕਾ ਦੇ ਲੱਖਾਂ ਡਾਲਰ ਛੱਡ ਪੰਜਾਬ ਦੀ ਸੇਵਾ &#39;ਚ ਲੱਗਾ ਗੁਰਸਿੱਖ ਜੋੜਾ, SGPC ਵੱਲੋਂ ਸਵਾਗਤ",
      channel: "SGPC Sri Amritsar",
      thumbnail: "https://www.youtube.com/embed/74jvN3A94es",
      videoId: "74jvN3A94es",
    },
  ]

  const mediaArticles = [
    {
      id: 1,
      title: "Free AI Education for Sikh Students",
      source: "Shiromani Committee",
      date: "2024-01-15",
      excerpt: "Punjab AI Excellence launches comprehensive free AI education program for Sikh students worldwide...",
    },
    {
      id: 2,
      title: "Free AI Education for Sikh Students",
      source: "Shiromani Committee",
      date: "2024-01-10",
      excerpt: "Revolutionary initiative brings cutting-edge AI education to Sikh community at no cost...",
    },
    {
      id: 3,
      title: "Free AI Education for Sikh Students",
      source: "Shiromani Committee",
      date: "2024-01-08",
      excerpt: "Breaking barriers in technology education with focus on Sikh student empowerment...",
    },
    {
      id: 4,
      title: "Free AI Education for Sikh Students",
      source: "Shiromani Committee",
      date: "2024-01-05",
      excerpt: "Community-driven approach to AI education creates new opportunities for Sikh youth...",
    },
  ]

  const stats = t("mediaCoverage.stats", { returnObjects: true })

  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative w-full">
        <motion.div
          className="w-full h-[450px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/HomePage images.jpeg')",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
            <motion.h1
              className="text-4xl font-bold text-white text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {t("mediaCoverage.podcastLibrary")} <br />
              <span className="text-xl font-light">{t("mediaCoverage.mediaAndPress")}</span>
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Featured Conversation */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semi-bold text-black mb-8">Featured Conversation</h2>
        <motion.div
          className="container mx-auto rounded-lg shadow-md bg-white p-8 flex flex-col md:flex-row gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/SGPC_Channel.png" alt="Featured" className="w-70 h-64 object-cover rounded-lg" />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl mb-5 text-justify font-bold">
                ਸ਼੍ਰੋਮਣੀ ਕਮੇਟੀ ਦੇ ਸਕੂਲੀ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਮੁਫ਼ਤ 'ਚ AI ਤਕਨੀਕ ਦੀ ਸਿੱਖਿਆ ਦੇਵੇਗਾ ਇਹ ਅਮਰੀਕਨ ਸਿੱਖ ਜੋੜਾ
              </h3>
              <p className="text-sm text-gray-700 mb-4 text-justify">
                ਅਮਰੀਕਾ ਦੇ ਸਿੱਖ ਜੋੜੇ ਨੇ ਸ਼੍ਰੋਮਣੀ ਕਮੇਟੀ ਦੇ ਸਕੂਲੀ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਮੁਫ਼ਤ 'ਚ AI ਤਕਨੀਕ ਦੀ ਸਿੱਖਿਆ ਦੇਣ ਲਈ ਇੱਕ ਪ੍ਰੋਗਰਾਮ ਸ਼ੁਰੂ ਕੀਤਾ ਹੈ। ਇਸ
                ਪ੍ਰੋਗਰਾਮ ਦਾ ਮਕਸਦ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਨਵੀਂ ਤਕਨੀਕੀ ਸਿੱਖਿਆ ਦੇ ਕੇ ਉਨ੍ਹਾਂ ਦੇ ਭਵਿੱਖ ਨੂੰ ਸੁਧਾਰਨਾ ਹੈ।
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <button onClick={fblink} className="text-gray-400 hover:text-orange-600 transition duration-300">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Podcast Library Section */}
      <section className="py-16 px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("mediaCoverage.podcastLibrary")}</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcastVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-all duration-300 group h-full"
              >
                <div className="relative">
                  <iframe
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition duration-300">
                    {video.title}
                  </h3>
                  <p className="text-orange-600 font-medium text-sm mb-4">{video.channel}</p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition duration-300"
                  >
                    {t("mediaCoverage.watchNow")}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media and Press Section */}
      <section className="py-16 px-16 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("mediaCoverage.mediaAndPress")}</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                    <span className="text-orange-600 font-semibold text-sm">News by {article.source}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition duration-300"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    {t("mediaCoverage.viewMore")}
                  </motion.button>

                  <button className="text-gray-400 hover:text-orange-600 transition duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition duration-300"
            >
              {t("mediaCoverage.loadMore")}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default MediaCoverage






