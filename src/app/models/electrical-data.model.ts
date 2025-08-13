export interface ElectricalData {
  timestamp: Date;
  v_l1_l2: number;
  v_l2_l3: number;
  v_l1_l3: number;
  i_l1: number;
  i_l2: number;
  i_l3: number;
  active_power: number;
  reactive_power: number;
  apparent_power: number;
  consumption: number;
}
