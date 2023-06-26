import { Col, Layout } from '@/layout';
import { Text } from '../Text';
import { List } from '../List';
import Image from 'next/image';

export const Menu = () => {
    const cuisienes = ['Русская', 'Французская', 'Итальянская', 'Кавказская'];

    return (
        <Layout
            id="menu"
            className="flex flex-col items-center justify-center gap-10"
        >
            <Col className="items-center justify-center gap-4">
                <h2>Что готовят наши выездные повара?</h2>
                <Text className="w-1/2 text-center">
                    Наши шеф-повара могут приготовить блюда любой кухни мира, но чаще всего
                    пользуются популярностью:
                </Text>
            </Col>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {cuisienes.map((item, index) => (
                    <Col
                        className="relative w-52 h-52 items-center justify-center rounded overflow-hidden"
                        key={item}
                    >
                        <Text className="relative z-10 text-lg text-white font-bold">
                            {item} кухня
                        </Text>
                        <Image
                            fill
                            className="lazy w-full h-full brightness-75"
                            src={`/img/food${index + 1}.jpg`}
                            alt={`${item} кухня`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </Col>
                ))}
            </div>
        </Layout>
    );
};
