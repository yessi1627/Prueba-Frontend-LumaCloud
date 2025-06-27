/*Componente básico para consumir API, mostrando
 noticias recientes de LumaCloud */


import React, { useEffect, useState } from 'react';

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data.slice(0, 5)); // Simular las 5 noticias recientes de LumaCloud
                setLoading(false);
            })
            .catch(() => {
                setError('No se puede cargar noticias');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando noticias de LumaCloud...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Últimas Noticias de LumaCloud</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostsList;
