/* eslint-disable no-unused-vars */

function TableHeader() {
  return (
    <table
      cellSpacing="0"
      style={{
        width: '100%',
        borderBottom: '0',
      }}
    >
      <thead>
        <tr>
          <td>
            SUBJECT

          </td>
          <td
            style={{
              fontWeight: 'bold',
            }}
          >
            BOT

          </td>
          <td
            width={76}
            style={{
              fontWeight: 'bold',
            }}
          >
            MID

          </td>
          <td
            width={76}
            style={{
              fontWeight: 'bold',
            }}
          >
            EOT

          </td>
          <td
            width={146}
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: 'whitesmoke',
            }}
          >
            AVERAGE

          </td>
          <td
            colSpan={2}
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: 'whitesmoke',
            }}
          >
            Subject Teachers

          </td>

        </tr>
      </thead>

    </table>
  );
}

export default TableHeader;
