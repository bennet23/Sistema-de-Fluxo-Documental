import React, { useState } from "react";

function Popup6({ activePopup, hidePopup }) {
  const handleCancel = () => {
    hidePopup();
  };

  return (
    <div
      className={activePopup === "popup6" ? "popup" : "popup popup--inactive"}
    >
      <div className="popup__content">
        <form className="popup__form" name="">
          <h1 className="popup__title heading-primary">
            Pedido de Revisão de Prova
          </h1>

          <div>
            <label>Código</label>
            <input
              type="number"
              placeholder="Introduza o Código de Estudante"
              required
            />
          </div>

          <div>
            <label>Nome Completo</label>
            <input
              type="text"
              placeholder="Introduza o Nome Completo"
              required
            />
          </div>

          <div>
            <label>NUIT</label>
            <input
              type="number"
              placeholder="Introduza o NUIT do Estudante"
              required
            />
          </div>

          <div>
            <label>Ano</label>
            <select name="" id="" required>
              <option value="">Selecione o Ano:</option>
              <option value="Primeiro">1º Ano</option>
              <option value="Segundo">2º Ano</option>
              <option value="Terceiro">3º Ano</option>
              <option value="Quarto">4º Ano</option>
              <option value="Quinto">5º Ano</option>
              <option value="Sexto">6º Ano</option>
            </select>
          </div>

          <div>
            <label>Curso</label>
            <select name="" id="" required>
              <option value="">Selecione o Curso:</option>
              <option value="Urbanismo">
                Licenciatura em Arquitetura e Urbanismo
              </option>
              <option value="Contabilidade">
                Licenciatura em Contabilidade e Auditoria
              </option>
              <option value="Direito">Licenciatura em Direito</option>
              <option value="Informática">
                Licenciatura em Engenharia Informática
              </option>
              <option value="Minas">
                Licenciatura em Engenharia Geológica de Minas
              </option>
              <option value="Qualidade">
                Licenciatura em Farmácia e Controle de Qualidade
              </option>
              <option value="Fisioterapia">Licenciatura em Fisioterapia</option>
              <option value="Seguros">
                Licenciatura em Gestão Financeira e Seguros
              </option>
              <option value="Marketing">
                Licenciatura em Gestão de Marketing
              </option>
              <option value="Empresas">
                Licenciatura em Gestão de Empresas
              </option>
              <option value="MBA Empresas">MBA em Gestão de Empresas</option>
              <option value="MBA Petróleo">
                MBA em Gestão de Negócios de Petróleo e Gás
              </option>
              <option value="MBA Projectos">MBA em Gestão de Projectos</option>
              <option value="Mestrado Informática">
                Mestrado em Engenharia Informática
              </option>
              <option value="Mestrado Pedagogia">
                Mestrado em Pedagogia do Ensino Superior e Qualidade de Ensino
              </option>
              <option value="Mestrado Saúde">Mestrado em Sáude Pública</option>
            </select>
          </div>

          <div>
            <label>Disciplina</label>
            <input
              type="text"
              placeholder="Introduza o Nome da Disciplina a Requerer"
              required
            />
          </div>

          <div>
            <label>Ano da disciplina</label>
            <select name="" id="" required>
              <option value="">Selecione o Ano da Disciplina:</option>
              <option value="Primeiro">1º Ano</option>
              <option value="Segundo">2º Ano</option>
              <option value="Terceiro">3º Ano</option>
              <option value="Quarto">4º Ano</option>
              <option value="Quinto">5º Ano</option>
              <option value="Sexto">6º Ano</option>
            </select>
          </div>

          <div>
            <label>Ano Lectivo</label>
            <input
              type="number"
              placeholder="Introduza o Ano Lectivo"
              required
            />
          </div>

          <div>
            <label>Semestre</label>
            <input type="text" placeholder="Introduza o Semestre" required />
          </div>

          <div>
            <label>Tipo de Prova</label>
            <select name="" id="" required>
              <option value="">Selecione o Tipo de Prova:</option>
              <option value="Normal">Exame Normal</option>
              <option value="Recorrência">Exame de Recorrência</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <label>Data de Publicação da Nota</label>
            <input type="date" required />
          </div>

          <div>
            <label>Registo Acadêmico - Estado</label>
            <select name="" id="">
              <option value="">Escolher o Estado:</option>
              <option value="Em espera">Em Espera</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Rejeitado">Rejeitado</option>
            </select>
          </div>

          <div>
            <label>Registo Acadêmico - Comentário</label>
            <textarea
              id="input-field"
              placeholder="Comentário do Registo Acadêmico"
              name="Mensagem"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label>Coordenação do Curso - Estado</label>
            <select name="" id="">
              <option value="">Escolher o Estado:</option>
              <option value="Em espera">Em Espera</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Rejeitado">Rejeitado</option>
            </select>
          </div>

          <div>
            <label>Coordenação do Curso - Comentário</label>
            <textarea
              id="input-field"
              placeholder="Comentário da Coordenação do Curso"
              name="Mensagem"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label>Director da Escola - Estado</label>
            <select name="" id="">
              <option value="">Escolher o Estado:</option>
              <option value="Em espera">Em Espera</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Rejeitado">Rejeitado</option>
            </select>
          </div>

          <div>
            <label>Director da Escola - Comentário</label>
            <textarea
              id="input-field"
              placeholder="Comentário do Director da Escola"
              name="Mensagem"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label>Registo Acadêmico - Estado</label>
            <select name="" id="">
              <option value="">Escolher o Estado:</option>
              <option value="Em espera">Em Espera</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Rejeitado">Rejeitado</option>
            </select>
          </div>

          <div>
            <label>Registo Acadêmico - Comentário</label>
            <textarea
              id="input-field"
              placeholder="Comentário do Registo Acadêmico"
              name="Mensagem"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label>Nota</label>
            <textarea
              id="input-field"
              placeholder="Deixe uma Nota"
              name="Mensagem"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div>
            <button className="btn btn-all-categories btn--anexar">
              <ion-icon name="documents-outline"></ion-icon>&nbsp; Anexar
              Documentos
            </button>
          </div>

          <div className="popup__buttons">
            <button type="submit" className="btn btn-all-categories">
              Submeter
            </button>

            <button
              type="button"
              className="btn btn-all-categories"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup6;
