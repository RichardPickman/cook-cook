import { Row } from '@/layout';
import Image from 'next/image';
import { Text } from '../Text';

export const Preview = () => {
    return (
        <Row className="gap-4">
            <Image
                src={'/img/chef.jpg'}
                width={640}
                height={1080}
                alt="chef"
            />
            <div>
                <h2>Хто я?</h2>
                <Text className="whitespace-wrap">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore iusto magni
                    voluptatibus aperiam, vero rem sunt voluptas! Voluptatem, laudantium officiis
                    reprehenderit, officia reiciendis culpa eveniet ipsum consequuntur suscipit
                    aliquid optio!
                </Text>
            </div>
        </Row>
    );
};
