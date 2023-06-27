import { Header } from '@/components/Header';
import { Preview } from '@/components/Preview';
import { ForWho } from '@/components/ForWho';
import { Menu } from '@/components/Menu';
import { Learn } from '@/components/Learn';
import { Cooking } from '@/components/Cooking';

export default function Home() {
    return (
        <main className="mx-auto flex flex-col gap-20">
            <Header />
            <Preview />
            <Cooking />
            <ForWho />
            <Menu />
            <Learn />
        </main>
    );
}
