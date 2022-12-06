function Instruction(props) {
    const { handleStepStado, children } = props;


    return (
        <section className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    {children}

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-lg px-4 mt-2"
                            onClick={handleStepStado}
                        >
                            Continuar {'>'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Instruction;