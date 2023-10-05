function Header2() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
    >
      <div style={{
        backgroundColor: 'whitesmoke',
        width: '75%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
      }}
      >
        END TERM REPORT
      </div>
      <div style={{
        width: '20%',
        backgroundColor: 'whitesmoke',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
      }}
      >
        TERM1-2022
      </div>
    </div>
  );
}

export default Header2;
