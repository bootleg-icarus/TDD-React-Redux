import { Types } from "./types";

const fillerText =
  " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta fuga quaerat modi, nulla, aliquam doloremque, voluptatibus ab libero consectetur laborum sed cumque saepe. Fugiat cum odio repudiandae iste dolorem voluptas. Expedita amet pariatur modi corrupti eum in, ipsum architecto eligendi fugit a sit sint, voluptatum quasi nesciunt id alias? Assumenda fuga illum cum omnis natus earum esse illo in molestias! Dolores aperiam, pariatur accusamus delectus vitae enim, optio quis veritatis, nesciunt corrupti eius id inventore! Dolorum ullam qui numquam praesentium hic eum illum sint, et voluptas molestias ex, incidunt totam. Ipsa voluptate explicabo aliquid commodi saepe quia animi odit temporibus? Repudiandae vitae vero perspiciatis ipsum aspernatur nam, neque sed nisi fugiat natus id cupiditate, dolore inventore accusamus laborum ratione officiis! Minima earum cupiditate illo dolore perspiciatis eaque eius autem incidunt voluptates et, molestiae suscipit dicta reprehenderit, repellat id debitis? Enim, autem dolore illum sapiente assumenda sit quas eaque qui laboriosam!";

const fakeFetcher = () => {
  const data = [
    { title: "Title 1", desc: fillerText },
    { title: "Title 2", desc: fillerText },
    { title: "Title 3", desc: fillerText }
  ];
  return data;
};
export const fetchPosts = () => {
  const result = fakeFetcher();

  return {
    type: Types.GET_POSTS,
    payload: result
  };
};
