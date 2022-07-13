import Footer from "../components/Footer";
import EditorPicked from "../components/Home/EditorPicked";
import Hero from "../components/Home/Hero";
import RecentArticles from "../components/Home/RecentArticles";
import Topics from "../components/Home/Topics";
import TrendingTopics from "../components/Home/TrendingTopics";
import NavBar from "../components/NavBar"

export default function Home({topicData, trendingData}) {
  return (
    <>
      <NavBar />
      <Hero />
      <Topics data={topicData} />
      <TrendingTopics data={trendingData} />
      <EditorPicked />
      <RecentArticles data={trendingData} />
      <Footer />
    </>

  )
}

export async function getStaticProps() {

  const topicData = [
    "/hero__2.jpg",
    "/hero__3.jpg",
    "/hero__4.jpg"
  ]

  const trendingData =  [
    "/hero__2.jpg",
    "/hero__3.jpg",
    "/hero__4.jpg",
    "/hero__3.jpg",
    "/hero__2.jpg",
    "/hero__4.jpg"
  ]

  return {
    props: {
      topicData,
      trendingData
    },
  }
}
