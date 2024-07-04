// noinspection ExceptionCaughtLocallyJS

import {useEffect, useState} from 'react';
import {Eye, GitBranch, Star} from 'lucide-react';
import {Button} from '@/components/ui/button';

interface Repository {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
}

function Repositories() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await fetch('https://api.github.com/users/ofluffydev/repos');
                if (!response.ok) {
                    throw new Error("HTTP error! status: " + response.status.toString());
                }
                const data = await response.json() as Repository[];
                setRepositories(data);
            } catch (e) {
                setError("Failed to fetch repositories");
            } finally {
                setLoading(false);
            }
        };

        fetchRepositories().then(r => r).catch((e: unknown) => e);
    }, []);

    const displayedRepositories = showAll ? repositories : repositories.slice(0, 10);

    if (loading) return <div className="text-center py-4">Loading repositories...</div>;
    if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Repositories</h2>
            <p className="text-gray-500 mb-8">Here are some of the repositories from my github.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedRepositories.map((repo) => (<div key={repo.id}
                                                           className="bg-gray-800 shadow rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
                           className="text-lg font-semibold text-purple-300 hover:text-purple-50 underline mb-2">{repo.name}</a>
                        <p className="text-white text-sm mb-3">{repo.description}</p>
                        <div className="flex justify-between text-xs text-gray-500">
                            <span className="flex items-center">
                                <Star size={14} className="mr-1"/>
                                {repo.stargazers_count}
                            </span>
                            <span className="flex items-center">
                                <GitBranch size={14} className="mr-1"/>
                                {repo.forks_count}
                            </span>
                            <span className="flex items-center">
                                <Eye size={14} className="mr-1"/>
                                {repo.watchers_count}
                            </span>
                        </div>
                    </div>))}
            </div>
            {!showAll && repositories.length > 10 && (<div className="text-center mt-6">
                    <Button className={'bg-purple-800 hover:bg-purple-300 text-center'} onClick={() => {
                        setShowAll(true);
                    }}>
                        Show More
                    </Button>
                </div>)}
        </div>);
}

export default Repositories;