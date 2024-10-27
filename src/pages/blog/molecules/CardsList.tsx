import { useState } from 'react'
import styles from './CardsList.module.scss'
import { Card } from '../atoms/Card'

interface Props {
    posts: {
        id: number
        title: string
        date: string
        time: string
        imgSrc: string
    }[]
    currentPage: number
    limitPostsOnPage: number
}

export function CardsList({posts, currentPage, limitPostsOnPage}: Props) {
    const [currentPageState, setCurrentPageState] = useState(currentPage)

    const showPosts = posts.slice((currentPageState - 1) * limitPostsOnPage, (currentPageState - 1) * limitPostsOnPage + limitPostsOnPage)

    const totalPages = Math.ceil(posts.length / limitPostsOnPage)

    const previousPage = (i: number): void => {
        setCurrentPageState((a) => a - i)
    }

    const nextPage = (i: number): void => {
        setCurrentPageState((a) => a + i)
    }

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {showPosts.map((post) =>
                    <Card data={{
                        title: post.title,
                        imgSrc: post.imgSrc,
                        date: post.date,
                        time: post.time
                    }} key={post.id}/>
                )}
            </div>


            <div className={styles.pagination}>
                {currentPageState > 1 &&
                    <button onClick={() => previousPage(1)}>←</button>
                }
                {currentPageState - 2 > 0 &&
                    <button onClick={() => previousPage(2)}>{currentPageState - 2}</button>
                }
                {currentPageState - 1 > 0 &&
                    <button onClick={() => previousPage(1)}>{currentPageState - 1}</button>
                }

                <button>{currentPageState}</button>

                {currentPageState + 1 <= totalPages &&
                    <button onClick={() => nextPage(1)}>{currentPageState + 1}</button>
                }
                {currentPageState + 2 < totalPages &&
                    <button onClick={() => nextPage(2)}>{currentPageState + 2}</button>
                }
                {currentPage < totalPages &&
                    <button onClick={() => nextPage(i)}>→</button>
                }
            </div>
        </div>
    )
}
