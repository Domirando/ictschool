import Head from "../Head";
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar/index'
import styles from './page.module.css'

const Page = ({
                  header = true,
                  footer = true,
                  title,
                  description,
                  image,
                  children,
              }) => {
    return (
        <div>
            <Head title={title} description={description} image={image}/>
            <Navbar/>
            <Header/>

            <main className={styles.mainItems}>{children} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda deserunt eum hic molestiae nam quae, quam repellat vero vitae? At cupiditate dolorem eum exercitationem fugit itaque iure nam neque similique velit! Culpa dolorem esse ipsa nemo temporibus? Accusamus aliquam amet aperiam assumenda at blanditiis, commodi dolores fuga incidunt maxime neque non nostrum obcaecati officiis placeat, quae quasi quo repellendus, rerum sequi sit tempore totam velit? A accusamus alias aliquam architecto atque autem, commodi doloremque ducimus eaque eius, eligendi est exercitationem illum in ipsam ipsum iste laborum libero molestiae nostrum optio quasi quis rem, repudiandae sit tempore voluptates. Aperiam, esse? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius excepturi fuga, harum nesciunt saepe suscipit. Aut autem dolor dolore doloremque ipsa, ipsum iusto mollitia quaerat, quia quidem, quos reiciendis rerum unde. Accusantium corporis eos error laborum nobis, nostrum tempora. Accusantium architecto dolorem error est reiciendis repellendus similique tenetur voluptates? Dolore exercitationem molestias porro voluptas. Distinctio doloremque dolorum eius est harum iure, non perferendis praesentium, quidem quis, repellendus velit. Nemo praesentium, quas. Eum minus, reiciendis. Ipsam nisi nostrum perferendis praesentium quibusdam quidem reiciendis repellendus. Consequatur doloribus earum illo incidunt ipsum? Accusamus ad aliquam, assumenda autem deserunt dignissimos dolorum ducimus et fugit hic, molestias necessitatibus nisi nobis obcaecati pariatur quae reiciendis repellendus. Ab accusantium, ad atque beatae expedita illo iure laboriosam mollitia nesciunt officiis placeat quis, repudiandae voluptatem? Accusamus aliquid beatae blanditiis harum laboriosam laudantium quibusdam rerum, similique sit sunt tempora voluptas! Ad aliquam aperiam aspernatur beatae dicta dolor doloremque, eveniet hic inventore maxime, mollitia nam necessitatibus officiis perferendis quia repellat voluptatem. Accusamus adipisci blanditiis dolorum est exercitationem fuga illo inventore molestiae necessitatibus nemo, neque quia temporibus totam ullam ut veritatis, vero voluptatum! Asperiores beatae debitis dignissimos eligendi modi placeat, quidem reprehenderit rerum ullam voluptas. Ad, alias autem cum enim harum pariatur?</main>

            <Footer/>
        </div>
    );
};

export default Page;
