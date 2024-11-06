import { useState } from 'react'
import styles from './CardList.module.scss'
import { ItemCard } from '../atoms/ItemCard'

interface Props {
    posts: {
        imgSrc: string
        title: string
        description: string
        link: string
    }[]
    currentPage: number
    limitPostsOnPage: number
}

export function CardList({posts, currentPage, limitPostsOnPage}: Props) {
    const [currentPageState, setCurrentPageState] = useState(currentPage)

    const showPosts = posts.slice((currentPageState - 1) * limitPostsOnPage, (currentPageState - 1) * limitPostsOnPage + limitPostsOnPage)

    const totalPages = Math.ceil(posts.length / limitPostsOnPage)

    const previousPage = (i: number): void => {
        setCurrentPageState(a => a-i)
    }

    const nextPage = (i: number): void => {
        setCurrentPageState(a => a+i)
    }

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {showPosts.map(post => (
                    <ItemCard data={{
                        imgSrc: post.imgSrc,
                        title: post.title,
                        description: post.description,
                        link: post.link
                    }} key={post.title} />
                ))}
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
                {currentPageState + 2 <= totalPages &&
                    <button onClick={() => nextPage(2)}>{currentPageState + 2}</button>
                }
                {currentPageState < totalPages &&
                    <button onClick={() => nextPage(1)}>→</button>
                }
            </div>
        </div>
    )
}
