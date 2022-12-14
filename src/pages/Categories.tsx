import { useOutletContext } from "react-router-dom";

import { Flex } from "../components/styled/Layout.styled";
import { PageHeading, CardHeading, Text } from "../components/styled/Text.styled";
import { CardWrapper } from "../components/styled/Details.styled";
import Button from "../components/styled/Button.styled";
import CategoryForm from "../components/CategoryForm";

interface Modal {
    useModal: (content: JSX.Element) => void
}

const Categories = () => {
    const { useModal }: Modal = useOutletContext();

    return(
        <>
            <PageHeading>Categories</PageHeading>

            <CardWrapper>
                <Flex direction="column" gap=".5rem">
                    <CardHeading>Name</CardHeading>
                    <Text>Description</Text>
                    <Button width="95%" marginBottom="1rem">Edit</Button>
                </Flex>
            </CardWrapper>
            <CardWrapper>
                <Flex direction="column" gap=".5rem">
                    <CardHeading>Name</CardHeading>
                    <Text>Description</Text>
                    <Button width="95%" marginBottom="1rem" onClick={() => useModal(<CategoryForm />)}>Edit</Button>
                </Flex>
            </CardWrapper>
        </>
    );
}

export default Categories;