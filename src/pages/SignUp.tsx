import { Link } from "react-router-dom";

import { Container, Flex } from "../components/styled/Layout.styled";
import { Heading, Text } from "../components/styled/Text.styled";
import { Form, Input } from "../components/styled/Form.styled";

import { gql, useMutation } from '@apollo/client';

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!, $password: String!, $confirmPassword: String!) {
    register(name: $name, email: $email, password: $password, confirmPassword: $confirmPassword) {
      id
    }
  }
`;

const SignUp = () => {
    const [addUser, { data, loading, error }] = useMutation(ADD_USER);
    if (loading) console.log('Submitting...');
    if (error) console.log(`Submission error! ${error.message}`);
    if(data) console.log(data);
    return(
        <Container>
            <Flex height="100vh" direction="column" justify="space-between" align="center">
                <Heading>Sign Up</Heading>
                
                    <Form
                        onSubmit={ (e: any) => {
                            e.preventDefault();
                            const formData = new FormData(e.target)
                            const { username, email, password, confirm } = Object.fromEntries(formData);
                            addUser({ variables: {
                                name: username,
                                email: email,
                                password: password,
                                confirmPassword: confirm
                            } });
                        } }>
                        <Flex width="100%" direction="column" justify="space-between" align="center">
                            <Input type="text" name="username" placeholder="Username" required />
                            <Input type="email" name="email" placeholder="Email" required />
                            <Input type="password" name="password" placeholder="Password" required />
                            <Input type="password" name="confirm" placeholder="Confirm password" required />
                            <Input type="submit" value="Sign Up" />
                        </Flex>
                    </Form>

                <Flex width="100%" padding="2rem" direction="column" justify="space-between" align="center">
                    <Text>Already have an account?</Text>
                    <Link to="/signin">Sign In</Link>
                </Flex>
            </Flex>
        </Container>
    );
}

export default SignUp;
