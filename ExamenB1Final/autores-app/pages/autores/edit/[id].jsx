import { AddEdit } from 'components/autores';
import { userService } from 'services';

export default AddEdit;

export async function getServerSideProps({ params }) {
    const autor = await userService.getById(params.id);

    return {
        props: { autor }
    }
}