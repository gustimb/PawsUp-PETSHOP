import CardProducto from './CardProducto';

const Productos = (props) => {
    return (
        <div className='contenedor'>
            {
                props.datos.map(item => (
                    <CardProducto
                        key={item.id}
                        title={item.name}
                        image={item.image[0]}
                    />
                ))
            }
        </div>
    );
}

export default Productos