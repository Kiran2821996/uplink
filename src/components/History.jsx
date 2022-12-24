import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { getPost } from "../features/SpaceXHistorySlice";

function History() {
    const { post, loading } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPost());
    }, [dispatch]);
  return (
    <>
    {post.map(item=>{
      return(
<h1>{item.title}</h1>
      )
      
    })}
    </>
    
  )
}

export default History