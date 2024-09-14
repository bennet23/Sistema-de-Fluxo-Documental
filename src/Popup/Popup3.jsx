import React, { useState } from "react";

function Popup3({ activePopup, hidePopup }) {
  const handleCancel = () => {
    hidePopup();
  };

  return (
    <div
      className={activePopup === "popup3" ? "popup" : "popup popup--inactive"}
    >
      <div className="popup__content">
        <form className="popup__form" name="">
          <h1 className="popup__title heading-primary">Pedido de Declaração</h1>

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
            <label>Nome do Pai</label>
            <input type="text" placeholder="Introduza o Nome do Pai" required />
          </div>

          <div>
            <label>Nome da Mãe</label>
            <input type="text" placeholder="Introduza o Nome da Mãe" required />
          </div>

          <div>
            <label>Naturalidade</label>
            <input
              type="text"
              placeholder="Introduza a Naturalidade"
              required
            />
          </div>

          <div>
            <label>Data de Nascimento</label>
            <input
              type="text"
              placeholder="Introduza a Data de Nascimento"
              required
            />
          </div>

          <div>
            <label>Residência</label>
            <input type="text" placeholder="Introduza a Residência" required />
          </div>

          <div>
            <label>Telefone</label>
            <input
              type="number"
              placeholder="Introduza o Número de Telefone"
              required
            />
          </div>

          <div>
            <label>Número do BI</label>
            <input
              type="text"
              placeholder="Introduza o Número do BI"
              required
            />
          </div>

          <div>
            <label>Arquivo de</label>
            <input
              type="text"
              placeholder="Introduza o Arquivo do BI"
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
            <label>Tipo de Declaração</label>
            <select name="" id="" required>
              <option value="">Escolher o Tipo de Declaração:</option>
              <option value="Disciplinas">
                Declaração de Disciplinas feitas dos anos lectivos
              </option>
              <option value="Frequência">Declaração de Frequência</option>
            </select>
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
            <label>Direcção Pedagógica - Estado</label>
            <select name="" id="">
              <option value="">Escolher o Estado:</option>
              <option value="Em Espera">Em Espera</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Rejeitado">Rejeitado</option>
            </select>
          </div>

          <div>
            <label>Direcção Pedagógica - Comentário</label>
            <textarea
              id="input-field"
              placeholder="Comentário da Direcção Pedagógica"
              name="Mensagem"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label>Secretaria - Estado</label>
            <select name="" id="">
              <option value="">Escolher o Estado:</option>
              <option value="Em Espera">Em Espera</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Rejeitado">Rejeitado</option>
            </select>
          </div>

          <div>
            <label>Secretaria - Comentário</label>
            <textarea
              id="input-field"
              placeholder="Comentário da Secretaria"
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

export default Popup3;
