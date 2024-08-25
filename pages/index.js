import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p></p>
        <hr></hr>
        <h2>1.  Introduce yourself.  What are your hobbies, favourite music, favourite food, and other things you can tell me about yourself?</h2>
        <p>Hello! I’m Lance P. Chincuanco, 21 years old and an Information Technology student. My hobbies are reading webtoons and mangas, going to the gym to workout, playing video games, watching movies, series and anime, and going out with my friends. There are a lot of foods I like but foods that are above on my list: fries, ice cream, sizzling chicken, kare kare, burgers, potato chips, Mcdo nuggets. These are mostly my food that I often crave. I am eager to learn and to experience new things.</p><br></br>
        <h2>2.  Why did you take up IT?</h2>
        <p>I chose Information Technology because since I was a child, I have used computers, and as time goes by I am learning more about computers by utilizing them. IT has diverse career paths and it is also high in demand that made it more appealing to me. The workplace can be at your home, office and coffee shops, you just have to bring your device and you can still do your assigned work. And I like problem solving, IT helps me to solve puzzled problems. Lastly, you can work around the world without the needs of relocating.</p><br></br>
        <h2>3.  What career do you see yourself exploring after graduation?</h2>
        <p>Currently I am still exploring which career related to Information Technology I am taking. Software Developer currently is what I am thinking to specialize in.
        </p><br></br>
        <h2>4.  What do you expect to learn in this subject?</h2>
        <p>I expect to learn some-what related to my program, I do also expect to learn more skills related to my program. I do think I will learn a lot in this particular subject. </p><br></br>
        <h2>5.  What topics you want to be discussed in this subject?</h2>
        <p>Topics that I want to be discussed in this subject, probably careers to take or explanation about them, topics related to programing.</p><br></br>
        <hr></hr>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}