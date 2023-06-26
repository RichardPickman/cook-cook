import { Row } from '@/layout';
import { List } from '../List';
import { Link } from '../Link';
import { IconWrapper } from '@/media/icons/IconWrapper';
import { VK } from '@/media/icons/VK';
import { Instagram } from '@/media/icons/Instagram';
import { Text } from '../Text';
import { Button } from '../Button';

export const Header = () => {
    return (
        <header className="flex w-full items-center justify-between px-2 py-4 border-b">
            <div>Logo</div>
            <List className="text-md gap-6 whitespace-nowrap">
                <Link to={'#preview'}>Обо мне</Link>
                <Link to={'#cooking'}>Презентация</Link>
                <Link to={'#for-who'}>Для кого</Link>
                <Link to={'#menu'}>Меню</Link>
                <Link to={'#learn'}>Обучение</Link>
                <Link to={'#prices'}>Выездные цены</Link>
            </List>
            <List className="items-center gap-6">
                <Text>793 582 663</Text>
                <Row className="flex gap-2">
                    <Link
                        to="https://vk.com/"
                        target="_blank"
                    >
                        <IconWrapper
                            size="w-8 h-8 p-2"
                            color="bg-blue-600"
                        >
                            <VK
                                size={16}
                                color="#FFFFFF"
                            />
                        </IconWrapper>
                    </Link>
                    <Link
                        to="https://instagram.com/"
                        target="_blank"
                    >
                        <IconWrapper
                            size="w-8 h-8 p-2"
                            color="bg-blue-600"
                        >
                            <Instagram
                                size={16}
                                color="#FFFFFF"
                            />
                        </IconWrapper>
                    </Link>
                </Row>
                <Button>Заказать звонок</Button>
            </List>
        </header>
    );
};
