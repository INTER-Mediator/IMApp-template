/*
 * INTER-Mediator
 * Copyright (c) INTER-Mediator Directive Committee (http://inter-mediator.org)
 * This project started at the end of 2009 by Masayuki Nii msyk@msyk.net.
 *
 * INTER-Mediator is supplied under MIT License.
 * Please see the full license for details:
 * https://github.com/INTER-Mediator/INTER-Mediator/blob/master/dist-docs/License.txt
 */
INTERMediatorOnPage.doBeforeConstruct = function () {
  INTERMediator.alwaysAddOperationExchange = true;
  INTERMediatorLog.suppressDebugMessageOnPage = true;
  INTERMediatorOnPage.buttonClassCopy = "btn btn-info"
  INTERMediatorOnPage.buttonClassDelete = "btn btn-warning"
  INTERMediatorOnPage.buttonClassInsert = "btn btn-success"
  INTERMediatorOnPage.buttonClassMaster = "btn btn-primary"
  INTERMediatorOnPage.buttonClassBackNavi = "btn btn-primary"
};

INTERMediatorOnPage.doAfterConstruct = function () {
  document.getElementById('container').style.display = 'block'
}

function setPassword(id) {
  const passwd = document.getElementById('inputpassword').value
  const hashvalue = INTERMediatorLib.generatePasswordHash(passwd)
  const context = IMLibContextPool.contextFromName('authuser')
  context.setDataWithKey(id, 'hashedpasswd', hashvalue)
}