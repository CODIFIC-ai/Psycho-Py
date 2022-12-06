import Table from "react-bootstrap/Table";

function BasicTable() {
  const phases = [
    "INTRODUÇÃO",
    "FASE A",
    "FASE B",
    "FASE C",
    "FASE D",
    "FASE E",
    "FASE F",
  ];

  return (
    <>
      <section className="px-4 py-5 my-5 text-center">
        <div className="col-lg-6 mx-auto">
          <h3>Informações do paciente</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Número</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{JSON.parse(localStorage.getItem("paciente"))?.name}</td>
                <td>{JSON.parse(localStorage.getItem("paciente"))?.email}</td>
                <td>{JSON.parse(localStorage.getItem("paciente"))?.numero}</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          {phases.map((item, index) => (
            <>
              <h3>{item}</h3>
              <Table striped bordered hover key={index}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Posição</th>
                    <th>Questão "O QUE"</th>
                    <th>Questão "ONDE"</th>
                    <th>Questão "QUANDO"</th>
                  </tr>
                </thead>
                <tbody>
                  {JSON.parse(localStorage.getItem(item)).map((evt, index) => (
                    <tr key={index}>
                      <td>{evt.name}</td>
                      <td>
                        X: {evt.x} Y: {evt.y}
                      </td>
                      <td>{evt.what}</td>
                      <td>{evt.when}</td>
                      <td>{evt.where}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default BasicTable;
