function Show(props) {
  return <p>ritikfnfhffhfh</p>;
}

export async function getStaticProps({ params }) {
  return {
    props: params,
  };
}
export async function getStaticPaths() {
  const data = [
    {
      id: "1",
      title: "one",
    },
    {
      id: "2",
      title: "two",
    },
    ,
    {
      id: "3",
      title: "three",
    },
    {
      id: "4",
      title: "four",
    },
  ];
  const paths = data.map((posts, i) => {
    return {
      params: {
        id: posts.id,
        title: posts.title,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default Show;
