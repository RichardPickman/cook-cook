import { Col, Layout, Row } from '@/layout';
import { List } from '../List';
import { Text } from '../Text';
import { Button } from '../Button';

export const Learn = () => {
    return (
        <Layout
            id="learn"
            className="flex gap-6 flex-wrap justify-center items-center"
        >
            <Col className="items-center justify-center gap-4">
                <h2>Хочешь научиться готовке?</h2>
                <Text className="w-1/2 text-center">
                    Разнообразь свои кулинарные навыки: выберите идеальный курс по кулинарии!
                </Text>
            </Col>
            <Col className="p-6 border gap-6 rounded-md">
                <h3>Базовый</h3>
                <div>
                    <span className="text-gray-500 text-4xl">₽</span>
                    <span className="text-black text-4xl">18</span>
                    <span className="text-gray-500 text-xs">/ месяц</span>
                </div>
                <List className="flex-col">
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="p-1 pointer-events-none"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="p-1 pointer-events-none"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="p-1 pointer-events-none"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                </List>
                <Button>Купить</Button>
            </Col>
            <Col className="p-6 border gap-6 rounded-md">
                <h3>Средний</h3>
                <div>
                    <span className="text-gray-500 text-4xl">₽</span>
                    <span className="text-black text-4xl">18</span>
                    <span className="text-gray-500 text-xs">/ месяц</span>
                </div>
                <List className="flex-col">
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="p-1 pointer-events-none"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="p-1 pointer-events-none"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="p-1 pointer-events-none"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                </List>
                <Button>Купить</Button>
            </Col>
            <Col className="p-6 border gap-6 rounded-md">
                <h3>Шеф</h3>
                <div>
                    <span className="text-gray-500 text-4xl">₽</span>
                    <span className="text-black text-4xl">18</span>
                    <span className="text-gray-500 text-xs">/ месяц</span>
                </div>
                <List className="flex-col">
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="p-1 pointer-events-none"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="p-1 pointer-events-none"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="p-1 pointer-events-none"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                </List>
                <Button>Купить</Button>
            </Col>
        </Layout>
    );
};
