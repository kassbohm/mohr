.. role:: raw-html(raw)
   :format: html


.. # define a hard line break for HTML

.. |br| raw:: html

   <br />

3D
--------------------

Berechnung mit Matrizen
^^^^^^^^^^^^^^^^^^^^^^^

Die Formeln gelten genau wie in 2D. Zum Beispiel gilt für eine Drehung um die gemeinsame :math:`z=\bar z`-Achse (sogenannte Elementardrehung):

.. math::

   \begin{bmatrix}
   v_{\bar x}  \\
   v_{\bar y}  \\
   v_{\bar z}
   \end{bmatrix}
   &=
   \underbrace{
   \begin{bmatrix}
   c_\varphi & s_\varphi & 0 \\
   -s_\varphi & c_\varphi& 0 \\
   0 & 0 & 1
   \end{bmatrix}
   }_R
   \begin{bmatrix}
   v_x  \\
   v_y  \\
   v_z
   \end{bmatrix}

.. math::

   \begin{bmatrix}
   T_{\bar x \bar x } & T_{\bar x \bar y } & T_{\bar x \bar z }\\
   & T_{\bar y \bar y } & T_{\bar y \bar z } \\
   \mathsf{sym} & & T_{\bar z \bar z }
   \end{bmatrix}   
   =
   \underbrace{
   \begin{bmatrix}
   c_\varphi & s_\varphi & 0 \\
   -s_\varphi & c_\varphi& 0 \\
   0 & 0 & 1
   \end{bmatrix}
   }_R
   \begin{bmatrix}
   T_{xx} & T_{xy} & T_{xz}\\
   & T_{yy} & T_{yz} \\
   \mathsf{sym} & & T_{zz}
   \end{bmatrix}   
   \underbrace{
   \begin{bmatrix}
   c_\varphi & -s_\varphi & 0 \\
   s_\varphi & c_\varphi& 0 \\
   0 & 0 & 1
   \end{bmatrix}
   }_{R^{\mathsf T}}

Diese Formeln gelten für jede beliebige Drehmatrix :math:`R`. Mit dem nachfolgendem Programm lassen sich Beispiele im Browser rechnen.

.. include:: ../../sympy1.rst

