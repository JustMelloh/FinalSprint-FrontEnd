<p>{results.message}</p>
                    ) : (
                        <>
                            <h2>Name: {results.name || 'N/A'}</h2>
                            <h2>Birthday: {results.birthday || 'N/A'}</h2>
                            {results.gifts && Object.keys(results.gifts).length > 0 ? (
                                Object.keys(results.gifts).map(category => (
                                    <div key={category}>
                                        <h3>{category.toUpperCase()}</h3>
                                        <ul>
                                            {results.gifts[category].map((gift, index) => (
                                                <li key={index}>{typeof gift === 'object' ? JSON.stringify(gift) : gift}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            ) : (
                                <p>No gifts found.</p>
                            )}
                            {results.likes && results.likes.length > 0 && (
                                <div>
                                    <h3>Likes</h3>
                                    <ul>
                                        {results.likes.map((like, index) => (
                                            <li key={index}>{typeof like === 'object' ? JSON.stringify(like) : like}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {results.dislikes && results.dislikes.length > 0 && (
                                <div>
                                    <h3>Dislikes</h3>
                                    <ul>
                                        {results.dislikes.map((dislike, index) => (
                                            <li key={index}>{typeof dislike === 'object' ? JSON.stringify(dislike) : dislike}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {results.loves && results.loves.length > 0 && (
                                <div>
                                    <h3>Loves</h3>
                                    <ul>
                                        {results.loves.map((love, index) => (
                                            <li key={index}>{typeof love === 'object' ? JSON.stringify(love) : love}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
                    )