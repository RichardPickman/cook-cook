import { Col, Layout, Row } from '@/layout';
import { List } from '../List';
import { Text } from '../Text';
import { Button } from '../Button';

export const Learn = () => {
    return (
        <Layout
            id="learn"
            className="flex flex-wrap items-center justify-center gap-6"
        >
            <Col className="items-center justify-center gap-4">
                <h2>Хочешь научиться готовке?</h2>
                <Text className="w-1/2 text-center">
                    Разнообразь свои кулинарные навыки: выберите идеальный курс по кулинарии!
                </Text>
            </Col>
            <Col className="gap-6 rounded-md border p-6">
                <h3>Базовый</h3>
                <div>
                    <span className="text-4xl text-gray-500">₽</span>
                    <span className="text-4xl text-black">18</span>
                    <span className="text-xs text-gray-500">/ месяц</span>
                </div>
                <List className="flex-col">
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="pointer-events-none p-1"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="pointer-events-none p-1"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="pointer-events-none p-1"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                </List>
                <Button>Купить</Button>
            </Col>
            <Col className="gap-6 rounded-md border p-6">
                <h3>Средний</h3>
                <div>
                    <span className="text-4xl text-gray-500">₽</span>
                    <span className="text-4xl text-black">18</span>
                    <span className="text-xs text-gray-500">/ месяц</span>
                </div>
                <List className="flex-col">
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="pointer-events-none p-1"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="pointer-events-none p-1"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="pointer-events-none p-1"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                </List>
                <Button>Купить</Button>
            </Col>
            <Col className="gap-6 rounded-md border p-6">
                <h3>Шеф</h3>
                <div>
                    <span className="text-4xl text-gray-500">₽</span>
                    <span className="text-4xl text-black">18</span>
                    <span className="text-xs text-gray-500">/ месяц</span>
                </div>
                <List className="flex-col">
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="pointer-events-none p-1"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="pointer-events-none p-1"
                            defaultChecked
                        />
                        <Text>Lorem ipsum, dolor sit</Text>
                    </Row>
                    <Row className="gap-3">
                        <input
                            type="checkbox"
                            className="pointer-events-none p-1"
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
