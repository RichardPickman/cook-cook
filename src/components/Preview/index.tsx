import { Col, Layout, Row } from '@/layout';
import Image from 'next/image';
import { Text } from '../Text';

export const Preview = () => {
    return (
        <Layout
            id="preview"
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
                <Image
                    className="self-center justify-self-center"
                    src={'/img/chef.png'}
                    width={500}
                    height={500}
                    alt="chef"
                />
                <Col className="gap-6">
                    <h2 className="text-center lg:text-right">Иван Иванович Ляшкин</h2>
                    <Text className="fit-content text-center lg:text-right">
                        Я - шеф с более чем 12-летним стажем в индустрии. Моя карьера началась с
                        небольшой компании, и с тех пор я преуспел в достижении великих результатов
                        и управлении успешными командами. Мой стиль руководства основан на принципах
                        открытости, коммуникации и вдохновения. Я стремлюсь создать мотивирующую и
                        эффективную рабочую среду, где каждый сотрудник может раскрыть свой
                        потенциал и достичь высоких результатов. Моя команда и я придерживаемся
                        ценностей инноваций, качества и постоянного развития. Мы поощряем инициативу
                        и творческий подход, и я всегда готов поддержать и вдохновить своих
                        сотрудников на новые достижения.
                    </Text>
                </Col>
            </div>
        </Layout>
    );
};
