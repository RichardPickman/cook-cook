import { Row } from '@/layout';
import { List } from '../List';
import { Link } from '../Link';
import { IconWrapper } from '@/media/icons/IconWrapper';
import { VK } from '@/media/icons/VK';
import { Instagram } from '@/media/icons/Instagram';
import { Text } from '../Text';

export const Header = () => {
    return (
        <header className="m-2 p-2">
            <Row className="justify-between">
                <div>Logo</div>
                <List className="gap-6">
                    <Link to={'#preview'}>Обо мне</Link>
                    <Link to={'#cooking'}>Презентация</Link>
                    <Link to={'#for-who'}>Для кого</Link>
                    <Link to={'#menu'}>Меню</Link>
                    <Link to={'#learn'}>Обучение</Link>
                    <Link to={'#prices'}>Выездные цены</Link>
                </List>
                <List className="gap-6">
                    <Text>793 582 663</Text>
                    <Row className="flex gap-2">
                        <IconWrapper
                            size="w-6 h-6"
                            color="bg-blue-600"
                        >
                            <VK
                                size={18}
                                color="#FFFFFF"
                            />
                        </IconWrapper>
                        <IconWrapper
                            size="w-6 h-6"
                            color="bg-blue-600"
                        >
                            <Instagram
                                size={18}
                                color="#FFFFFF"
                            />
                        </IconWrapper>
                    </Row>
                    <button>Заказать звонок</button>
                </List>
            </Row>
        </header>
    );
};
