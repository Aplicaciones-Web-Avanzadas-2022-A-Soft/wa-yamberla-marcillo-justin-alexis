import { AddEdit } from 'components/libros';
import { libroService } from 'services/libro.service';

export default AddEdit;

export async function getServerSideProps({ params }) {
    const libro = await libroService.getById(params.id);

    return {
        props: { libro }
    }
}