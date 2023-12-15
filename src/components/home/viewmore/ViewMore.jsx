import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"
import ViewMoreCards from "./ViewMoreCards"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Modular Kitchen' cover={img} />
        <div className='container recent'>
          <ViewMoreCards/>
        </div>
      </section>
    </>
  )
}

export default Blog
