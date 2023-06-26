import { Header } from '@/components/Header';
import { Preview } from '@/components/Preview';
import { ForWho } from '@/components/ForWho';
import { Menu } from '@/components/Menu';
import { Learn } from '@/components/Learn';

export default function Home() {
    return (
        <main className="mx-auto flex flex-col gap-20">
            <Header />
            <Preview />
            <ForWho />
            <Menu />
            <Learn />
        </main>
    );
}
