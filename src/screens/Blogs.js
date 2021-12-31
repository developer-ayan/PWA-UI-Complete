import React from 'react'
import { db } from '../config/Firebase'
import { collection, onSnapshot } from 'firebase/firestore'

export default function Blogs() {

    const [blog, setBlog] = React.useState([])
    console.log(blog)

    React.useEffect(() =>
        onSnapshot(collection(db, 'Daily Blogs'), (snapshot) =>
            setBlog(snapshot.docs.map((doc) => doc.data()))
        )
    )

    return (
        <div>

            {
                blog.map((e, i) => {
                    return (
                        <div key={i}>

                            <div className='blog-image'>
                                <img src={e.BlogImage} />
                            </div>

                            <div>
                                <div className='blog-title'>
                                    <h1>{e.FirstTitle}</h1>
                                </div>
                                <div className='blog-article'>
                                    <p>
                                        {e.FirstBlog}
                                    </p>
                                </div>
                            </div>
                            <div className='blog-article'>
                                <h1>{e.SecondTitle}</h1>
                                <p>
                                    {e.SecondBlog}
                                </p>
                            </div>

                            <div className='blog-article'>
                                <h1>{e.ThirdTitle}</h1>
                                <p>
                                    {e.ThirdBlog}
                                </p>
                            </div>
                        </div>


                    )
                })
            }



        </div >
    )
}
