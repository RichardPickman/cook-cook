import { Row } from '@/layout';
import { List } from '../List';
import { Link } from '../Link';
import { IconWrapper } from '@/media/icons/IconWrapper';
import { VK } from '@/media/icons/VK';
import { Instagram } from '@/media/icons/Instagram';
import { Text } from '../Text';
import { Button } from '../Button';
import { Menu } from '@/media/icons/Menu';
import { useState } from 'react';
import { Modal } from '../Modal';

export const Header = () => {
    const [isOpen, setOpen] = useState(false);

    const onClick = () => setOpen(!isOpen);

    return (
        <header className="flex w-full items-center justify-between border-b px-2 py-4 drop-shadow-sm">
            <div>Logo</div>
            <List className="text-md hidden gap-6 whitespace-nowrap lg:flex">
                <Link to={'#preview'}>Обо мне</Link>
                <Link to={'#for-who'}>Для кого</Link>
                <Link to={'#menu'}>Меню</Link>
                <Link to={'#learn'}>Обучение</Link>
            </List>
            <List className="hidden items-center gap-6 lg:flex">
                <Link to={'tel:+7 (999) 123-12-34'}>+7 (999) 123-12-34</Link>
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
            </List>
            <Button
                className="flex lg:hidden"
                onClick={onClick}
            >
                <IconWrapper
                    size="w-6 h-6"
                    color="bg-transparent"
                >
                    <Menu
                        size={24}
                        color={'#000'}
                    />
                </IconWrapper>
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                type="float"
                position={{ top: 0, right: 0, bottom: 0 }}
            >
                <div
                    className="
                        flex
                        h-full
                        w-full
                        translate-x-0
                        transform
                        flex-col
                        items-center
                        justify-center
                        gap-10
                        border-l
                        bg-white
                        p-4
                        text-right
                        drop-shadow-md
                    "
                    onClick={() => setOpen(false)}
                >
                    <List className="text-md flex-col gap-6 whitespace-nowrap">
                        <Link to={'#preview'}>Обо мне</Link>
                        <Link to={'#for-who'}>Для кого</Link>
                        <Link to={'#menu'}>Меню</Link>
                        <Link to={'#learn'}>Обучение</Link>
                    </List>
                    <Link to={'tel:+7 (999) 123-12-34'}>+7 (999) 123-12-34</Link>
                    <Row className="flex justify-end gap-2">
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
                </div>
            </Modal>
        </header>
    );
};
