import { ProfileImageDropzone } from "../ProfileImageDropzone/ProfileImageDropzone";
import { NumberInput, TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import styled from 'styled-components';

export function CreationForm() {
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      termsOfService: false,
    },

    validate: {
      firstName: (value) => (value.length > 0 ? null : 'First name cannot be empty'),
      lastName: (value) => (value.length > 0 ? null : 'Last name cannot be empty'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone: (value) => (value > 0 ? null : 'Invalid phone number')
    },
  });

  return (
    <Box maw={340} mx="auto" style={{margin: "auto"}}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <FormWrapper>
        <Wrapper>
        <TextInput
          withAsterisk
          label="First name"
          placeholder="Enter your first name"
          {...form.getInputProps('firstName')}
        />
        <TextInput
          withAsterisk
          label="Last name"
          placeholder="Enter your last name"
          {...form.getInputProps('lastName')}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <NumberInput 
        withAsterisk
        label="Phone number"
        placeholder="Enter your phone number"
        {...form.getInputProps('phone')}
        />
        </Wrapper>

        <ProfileImageDropzone />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Save</Button>
        </Group>
        </FormWrapper>
      </form>
    </Box>
  );
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 768px;
`

const Wrapper = styled.div`
  background: lightgray;
  padding: 2rem 4rem;
`





        // <Checkbox
        //   mt="md"
        //   label="I agree to sell my privacy"
        //   {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        // />
