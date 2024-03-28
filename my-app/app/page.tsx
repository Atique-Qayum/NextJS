import Link from "next/link"
import Navbar from "./nevbar"

export default function page () {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <button className = "bg-blue-600 text-white rounded-full m-3 py-2 px-2">Click me!</button><br / >
      <h2>Muhammad Atique Qayum</h2><br />  
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, saepe corrupti. Pariatur, asperiores accusamus dolores assumenda ullam animi minus odio libero ab eveniet doloribus. Error provident ut itaque in eum!
    Sint saepe neque aut pariatur magnam maxime, provident voluptatibus autem suscipit dolores tenetur, deserunt harum illo aperiam sapiente adipisci atque commodi optio minus rem similique reprehenderit repellendus, accusantium doloribus. Libero?
    Repudiandae aliquid suscipit eos amet consequuntur tenetur vero esse dolore ab! Repellendus, reprehenderit harum. Totam magnam quisquam, et maxime aliquam placeat dolor sit corporis cumque repellat atque nobis perspiciatis accusamus.
    Quam explicabo qui debitis similique quia officiis fugit illum quae incidunt quis a nesciunt unde adipisci nisi voluptatum, repellendus laboriosam quo eaque. Dignissimos obcaecati rerum corrupti quibusdam esse quas nemo?
    Quisquam odio ad dignissimos sint sequi cum. Rem dolor ipsam est voluptatem hic asperiores, obcaecati natus amet nihil minima commodi exercitationem minus adipisci officiis corrupti eos? Fuga iure et velit.
    Fugit reprehenderit esse, dolores neque in saepe qui eum praesentium delectus, blanditiis sit minima laboriosam beatae. Voluptas alias asperiores quas, tempora eum, laudantium minus, libero velit commodi doloribus necessitatibus itaque?
    Debitis minus odit et quo rem pariatur blanditiis numquam praesentium! Fugit illum, libero voluptatum assumenda reprehenderit magnam consequatur id ratione repudiandae numquam distinctio corrupti cum aspernatur temporibus minus rerum laudantium!
    Et quo, ratione impedit iste voluptatum quae natus nesciunt perferendis dolorum tempore, repudiandae tempora quisquam voluptatem quam in perspiciatis ea labore quia. Laborum molestias ducimus, cupiditate ad nostrum magnam corporis.
    Reiciendis iste labore iusto voluptatem porro sit temporibus, exercitationem soluta laboriosam voluptate sed dolor sequi numquam aperiam sunt quo omnis, nihil corporis ducimus necessitatibus illum inventore! Amet debitis quo quaerat.
    Iusto eaque perspiciatis consequatur enim aliquid perferendis, qui reiciendis delectus totam? Vel eos recusandae deleniti iste ad. Sed optio necessitatibus sunt facere, nam earum enim praesentium commodi magnam, culpa consequuntur.</p>
      <button className = "bg-red-500 text-black rounded-full m-4 py-2 px-5">Contact Us</button><br />
    <Link href={'/about'}>About</Link><br />
    <Link href={'/blogs/blog1'}>Blog1</Link><br />
    <Link href={'/hello'}>Hello</Link><br />
    </div> 
  )
}