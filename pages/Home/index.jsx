import React, { useState } from "react";
import Layout from "../../HOC/layout";
import Headline from "../../Components/PageComponents/Header/index";
import Table from "../../Components/PageComponents/HomeComponents/table";
import Pagination from "../../Components/PageComponents/Pagination/index";

export const getServerSideProps = async () => {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  const TData = await res.json();
  return {
    props: {
      TData,
    },
  };
};
const Index = ({ TData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = TData.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Layout>
      <div className="flex flex-col h-screen justify-between">
        <div>
          <Headline Headline={"Dashboard"} />
          <div className="px-6">
            <Table TData={currentPosts} />
          </div>
        </div>
        <div className="mb-6">
          <Pagination
            PostsPerPage={postsPerPage}
            totalPosts={TData.length}
            paginate={paginate}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
