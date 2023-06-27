import { Col, Layout } from '@/layout';
import { Text } from '../Text';
import Image from 'next/image';
import { Button } from '../Button';

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
                        className="
                            group
                            relative
                            h-52
                            w-52
                            items-center
                            justify-center
                            overflow-hidden
                            rounded
                            drop-shadow-md
                        "
                        key={item}
                    >
                        <Text
                            className="
                                pointer-events-none
                                absolute
                                z-10
                                translate-y-0
                                transform
                                font-bold
                                text-white
                                transition
                                group-hover:-translate-y-7
                            "
                        >
                            {item} кухня
                        </Text>
                        <Button
                            className="
                                absolute
                                z-10
                                translate-y-0
                                transform
                                font-bold
                                opacity-0
                                transition
                                group-hover:translate-y-7
                                group-hover:opacity-100
                            "
                        >
                            Заказать
                        </Button>
                        <Image
                            fill
                            className="
                                lazy
                                h-full
                                w-full
                                brightness-50
                                transition
                                duration-200
                                group-hover:scale-105
                            "
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
