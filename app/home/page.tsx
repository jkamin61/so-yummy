import Header from "@/app/components/header";
import About from "@/app/components/main-page/about";
import Footer from "@/app/components/footer";
import PreviewCategories from "@/app/components/main-page/preview-categories";

export default function Home(): JSX.Element {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <About/>
                <PreviewCategories/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}