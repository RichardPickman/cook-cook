import { Col, Layout, Row } from '@/layout';
import Image from 'next/image';
import { Text } from '../Text';

export const ForWho = () => {
    return (
        <Layout
            id="for-who"
            direction="flex-col"
        >
            <div
                className="
                    grid
                    items-center
                    justify-center
                    gap-10
                    lg:grid-cols-2
                "
            >
                <Col className="gap-6">
                    <h2 className="text-center lg:text-left">Кому подойдут услуги повара?</h2>
                    <Text className="fit-content text-center lg:text-left">
                        Услуги повара на выезд подойдут совершенно для любого праздника и любой
                        компании, будь то свадьба или маленький праздник для самых близких,
                        вечеринка в лофте или загородное торжество в кругу семьи, корпоратив
                        компании или выезд на барбекю - мы поможем вам в любой ситуации. Благодаря
                        большому запасу рецептов и умение работать с любой кухней мира - наша
                        команда сделает любой праздник по настоящему изысканным, уникальным и
                        запоминающимся. Пора попробовать на вкус и насладиться кулинарными изысками,
                        не выходя из дома, от настоящих профессионалов своего дела.
                    </Text>
                </Col>
                <Image
                    className="self-center justify-self-center"
                    src="/img/dish.png"
                    width={600}
                    height={600}
                    alt="dish"
                />
            </div>
        </Layout>
    );
};
