import React, { useState } from "react";

function Popup8({ activePopup, hidePopup }) {
  const handleCancel = () => {
    hidePopup();
  };

  return (
    <div
      className={activePopup === "popup8" ? "popup" : "popup popup--inactive"}
    >
      <div className="popup__content">
        <form className="popup__form" name="">
          <h1 className="popup__title heading-primary">Curso Especial</h1>

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
              <option value="">Selecione o Nome do Curso:</option>
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
              <option value="">Selecione o Nome do Curso:</option>
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
            <label>Ano Lectivo</label>
            <input
              type="number"
              placeholder="Introduza o Ano Lectivo"
              required
            />
          </div>

          <div>
            <label>Turno</label>
            <select name="" id="" required>
              <option value="">Selecione o Turno:</option>
              <option value="Diurno">Diurno</option>
              <option value="Noturno">Noturno</option>
            </select>
          </div>

          <div>
            <label>Disciplina</label>
            <input type="text" placeholder="Introduza a Disciplina" required />
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
            <label>Direcção Pedagógica - Estado</label>
            <select name="" id="">
              <option value="">Escolher o Estado:</option>
              <option value="Em espera">Em Espera</option>
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
            <label>Direcção Financeira - Estado</label>
            <select name="" id="">
              <option value="">Escolher o Estado:</option>
              <option value="Em espera">Em Espera</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Rejeitado">Rejeitado</option>
            </select>
          </div>

          <div>
            <label>Direcção Financeira - Comentário</label>
            <textarea
              id="input-field"
              placeholder="Comentário da Direcção Financeira"
              name="Mensagem"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label>Secretaria - Estado</label>
            <select name="" id="">
              <option value="">Escolher o Estado:</option>
              <option value="Em espera">Em Espera</option>
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

export default Popup8;
