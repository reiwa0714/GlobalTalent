export default function Navbar() {
    return (
        <nav style={{ padding: '10px 20px', background: '#003366', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
            <strong>Global Talent</strong>
            <div>
                <span style={{ marginLeft: '15px' }}>Vacantes</span>
                <span style={{ marginLeft: '15px' }}>Perfiles</span>
            </div>
        </nav>
    );
}