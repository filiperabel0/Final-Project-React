import { useState } from "react";

function SelectForm() {
  const [Professores, setProfessores] = useState("");
  const [Disciplina, setDisciplina] = useState("");
  const [Turmas, setTurmas] = useState("");
  return (
    <div>
      <form action="">
        <input list="professores" name="professores" />
        <datalist id="professores">
          <option value="Sandra">Sandra</option>
          <option value="Cleber">Cleber</option>
          <option value="Conceição">Conceição</option>
          <option value="Rodolfo">Rodolfo</option>
          <option value="Eder">Eder</option>
          <option value="Mateus">Mateus</option>
        </datalist>
      </form>

      <form action="">
        <input list="disciplina" name="disciplina" />
        <datalist id="disciplina">
          <option value="Framework">Framework</option>
          <option value="Atualidades">Atualidades</option>
          <option value="Matemática">Matemática</option>
          <option value="Filosofia">Filosofia</option>
          <option value="IOS">IOS</option>
          <option value="Android">Android</option>
        </datalist>
      </form>

      <form action="">
        <input list="turma" name="turma" />
        <datalist id="turma">
          <option value="3A">3A</option>
          <option value="3B">3B</option>
          <option value="3C">3C</option>
          <option value="3A2">3A2</option>
          <option value="3B2">3B2</option>
          <option value="3C2">3C2</option>
        </datalist>
      </form>

      <form>
        <input type="text" id="days" placeholder="Numero de Dias" />
      </form>

      <input type="submit" />
    </div>
  );
}
export default SelectForm;
