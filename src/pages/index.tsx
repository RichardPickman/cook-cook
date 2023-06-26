import { Header } from '@/components/Header';
import { Preview } from '@/components/Preview';
import { ForWho } from '@/components/ForWho';
import { Menu } from '@/components/Menu';
import { Prices } from '@/components/Prices';
import { Learn } from '@/components/Learn';

export default function Home() {
    return (
        <main className="flex flex-col gap-20 mx-auto">
            <Header />
            <Preview />
            <ForWho />
            <Menu />
            <Learn />
        </main>
    );
}
