import Layout from "../components/Layout";

export default function Formulario(){
    return(
        <>
            <Layout title={"Formulario"}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label"> Nombre </label>
                        <input type="text"
                            className="form-control"
                            placeholder="Ej: Justin"
                            id="nombre"
                            aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            INGRESA TU NOMBRE
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Layout>
        </>
    )
}