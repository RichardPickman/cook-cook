import { Header } from '@/components/Header';
import { Preview } from '@/components/Preview';
import { Cooking } from '@/components/Cooking';
import { ForWho } from '@/components/ForWho';
import { Menu } from '@/components/Menu';
import { Prices } from '@/components/Prices';
import { Learn } from '@/components/Learn';
import { Layout } from '@/layout';

export default function Home() {
    return (
        <main className="mx-auto">
            <Header />
            <Layout direction="flex-col">
                <Preview />
                <Cooking />
                <ForWho />
                <Menu />
                <Learn />
                <Prices />
            </Layout>
        </main>
    );
}
