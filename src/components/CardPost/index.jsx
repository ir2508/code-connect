import Image from "next/image"
import { Avatar } from "../Avatar"
import styles from "./cardpost.module.css"
import Link from "next/link"

export const CardPost = ({ post }) => {
    return (
        <Link className={styles.link} href={`/posts/${post.slug}`}>
            <article className={styles.card}>
                <header className={styles.header}>
                    <figure className={styles.figure}>
                        <Image
                            src={post.cover}
                            alt={`Capa do post de titulo: ${post.title}`}
                            width={438}
                            height={133}
                        />
                    </figure>
                </header>
                <section className={styles.content}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <a href="">Ver Detalhes</a>
                </section>
                <footer className={styles.footer}>
                    <Avatar
                        imageSrc={post.author.avatar}
                        name={post.author.username}
                    />
                </footer>
            </article>
        </Link>
    )
}