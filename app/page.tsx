import Header from "@/app/components/header";
import About from "@/app/components/main-page/about";
import Footer from "@/app/components/footer";
import ChooseYourBreakfast from "@/app/components/main-page/choose-your-breakfast";
import Search from "@/app/components/main-page/search";
import PreviewCategories from "@/app/components/main-page/preview-categories";

export default function Home(): JSX.Element {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <About/>
                <ChooseYourBreakfast/>
                <Search/>
                <PreviewCategories/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}